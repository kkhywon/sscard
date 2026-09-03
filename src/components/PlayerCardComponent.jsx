import { useRef, useState } from "react";
import PlayerCardBack from "./PlayerCardBack";

function PlayerCard({ player }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShining, setIsShining] = useState(false);

  const shineTimer = useRef(null);
  const lastTapTime = useRef(0);

  const toggleCard = () => {
    setIsFlipped((current) => !current);
  };

  // PC
  // 더블클릭 → 카드 뒤집기
  const handleDoubleClick = () => {
    const canHover = window.matchMedia("(hover: hover)").matches;

    if (canHover) {
      toggleCard();
    }
  };

  // 모바일
  // 한 번 터치 → 홀로그램
  // 두 번 터치 → 카드 뒤집기
  const handleTouchEnd = () => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTime.current;

    if (
      lastTapTime.current !== 0 &&
      timeSinceLastTap < 300
    ) {
      lastTapTime.current = 0;

      clearTimeout(shineTimer.current);
      setIsShining(false);

      toggleCard();

      return;
    }

    lastTapTime.current = now;

    setIsShining(true);

    clearTimeout(shineTimer.current);

    shineTimer.current = setTimeout(() => {
      setIsShining(false);
    }, 700);
  };

  return (
    <article
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
      "
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`${player.name} 선수 카드`}
        onDoubleClick={handleDoubleClick}
        onTouchEnd={handleTouchEnd}
        onContextMenu={(event) => {
          event.preventDefault();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            toggleCard();
          }
        }}
        className="
  group
  relative
  mx-auto
  w-fit
  max-w-full
  cursor-pointer
  select-none
  touch-manipulation

  [perspective:1200px]

  transition-transform
  duration-300
  ease-out

  hover:-rotate-1
  hover:scale-[1.03]
"
      >
        {/* 앞면과 뒷면을 같이 회전시키는 부분 */}
        <div
          className={`
            relative
            origin-center

            transition-transform
            duration-700

            [transform-style:preserve-3d]
            [will-change:transform]

            ${
              isFlipped
                ? "[transform:rotateY(180deg)_translateZ(0)]"
                : "[transform:rotateY(0deg)_translateZ(0)]"
            }
          `}
        >
          {/* 앞면 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3%]

              [backface-visibility:hidden]
              [-webkit-backface-visibility:hidden]
              [transform:translateZ(0)]
            "
          >
            <img
              src={player.image}
              alt={`${player.name} 선수 카드`}
              draggable={false}
              className="
                block
                h-auto
                w-full

                max-h-[calc(100dvh-112px)]
                max-w-full

                object-contain
                drop-shadow-2xl

                sm:max-h-[calc(100dvh-48px)]
              "
            />

            {/* 홀로그램 빛 */}
            <div
              className={`
                pointer-events-none
                absolute
                inset-0

                skew-x-[-20deg]

                bg-gradient-to-r
                from-transparent
                via-cyan-100/40
                to-transparent

                mix-blend-screen

                ${
                  isShining
                    ? "translate-x-[150%] transition-transform duration-700"
                    : "-translate-x-[150%] transition-none"
                }

                group-hover:translate-x-[150%]
                group-hover:transition-transform
                group-hover:duration-700
              `}
            />
          </div>

          {/* 뒷면 */}
          <PlayerCardBack player={player} />
        </div>
      </div>
    </article>
  );
}

export default PlayerCard;