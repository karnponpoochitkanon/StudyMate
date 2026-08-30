'use client';

import { useState } from 'react';

const LINES = [
  'ไปอ่านอีกนิด เดี๋ยวเก่งเอง 📚',
  'กาแฟหมดแล้วยัง? ลุยต่อดิ ☕',
  'เพื่อนอ่านอยู่ อย่านอนนะ 👀',
  'Midterm ไม่รอใคร — แต่เราคอยนายได้ ✨',
  'พัก 5 นาที แล้วกลับมาสู้ 💪',
];

export default function StudyBuddy() {
  const [line, setLine] = useState<string | null>(null);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-2">
      {line && (
        <p className="max-w-xs rounded-2xl rounded-br-sm bg-white px-4 py-2 text-sm font-medium text-navy shadow-lg">
          {line}
        </p>
      )}
      <button
        type="button"
        onClick={() =>
          setLine(LINES[Math.floor(Math.random() * LINES.length)])
        }
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Poke the study buddy"
        title="poke me"
      >
        🦉
      </button>
    </div>
  );
}
