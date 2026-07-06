import React, { useEffect, useState } from "react";

// Jumlah lingkaran ekor di belakang kursor asli (bisa ditambah jika ingin lebih panjang)
const TRAIL_COUNT = 4;

export default function PencilCursor() {
  const [mainPos, setMainPos] = useState({ x: 0, y: 0 });
  
  // Array untuk menyimpan posisi masing-masing lingkaran ekor
  const [trailPositions, setTrailPositions] = useState(
    Array(TRAIL_COUNT).fill({ x: 0, y: 0 })
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMainPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Logika Multi-follow: Setiap lingkaran mengikuti elemen di depannya secara berantai
  useEffect(() => {
    let animationFrameId: number;

    const updateTrails = () => {
      setTrailPositions((prev) => {
        const newPositions = [...prev];
        
        // Lingkaran pertama mengikuti kursor utama (ditambahkan offset sedikit agar pas di ujung panah)
        const targetX0 = mainPos.x + 4;
        const targetY0 = mainPos.y + 4;
        newPositions[0] = {
          x: prev[0].x + (targetX0 - prev[0].x) * 0.25,
          y: prev[0].y + (targetY0 - prev[0].y) * 0.25,
        };

        // Lingkaran selanjutnya mengikuti lingkaran di depannya (efek berantai/multi-follow)
        for (let i = 1; i < TRAIL_COUNT; i++) {
          const targetX = newPositions[i - 1].x;
          const targetY = newPositions[i - 1].y;
          
          // Menggunakan nilai linear interpolation (lerp) agar ada jeda waktu halus
          newPositions[i] = {
            x: prev[i].x + (targetX - prev[i].x) * 0.20,
            y: prev[i].y + (targetY - prev[i].y) * 0.20,
          };
        }

        return newPositions;
      });

      animationFrameId = requestAnimationFrame(updateTrails);
    };

    animationFrameId = requestAnimationFrame(updateTrails);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mainPos]);

  return (
    <>
      {/* Catatan: `cursor: none !important` telah dihapus 
        agar kursor panah bawaan OS kembali normal seperti semula.
      */}

      {/* Kontainer Ekor Animasi (Hanya aktif di desktop) */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
        
        {/* BEKAS GORESAN MULTI-FOLLOW (Ekor Lingkaran Berantai) */}
        {trailPositions.map((pos, index) => {
          // Mengatur ukuran lingkaran agar semakin ke belakang semakin kecil
          const size = 12 - index * 2; 
          // Mengatur kepekatan warna agar semakin ke belakang semakin memudar
          const opacity = 0.6 - index * 0.12;

          return (
            <div
              key={index}
              className="absolute rounded-full border border-black dark:border-white transition-transform duration-500 ease-out"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
                opacity: opacity,
              }}
            />
          );
        })}

      </div>
    </>
  );
}