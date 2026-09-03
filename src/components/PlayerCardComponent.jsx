import { useRef, useState } from "react";

function InfoItem({ label, value }) {
  return (
    <div className="border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
      <p className="text-[clamp(9px,1.35vw,12px)] tracking-[0.16em] text-cyan-200/70">
        {label}
      </p>

      <p className="mt-1 text-[clamp(11px,1.8vw,17px)] font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function PlayerCardBack({ player }) {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-[3%]
        border-2
        border-cyan-200/50
        bg-gradient-to-br
        from-blue-500
        via-blue-900
        to-slate-950
        text-white
        [backface-visibility:hidden]
        [transform:rotateY(180deg)]
      "
    >
      {/* 왼쪽 위 배경 빛 */}
      <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-cyan-300/25 blur-3xl" />

      {/* 오른쪽 아래 배경 빛 */}
      <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* 안쪽 테두리 */}
      <div className="pointer-events-none absolute inset-[2.5%] border-2 border-cyan-100/20" />

      {/* 배경 등번호 */}
      <p
        className="
          pointer-events-none
          absolute
          -right-[4%]
          top-[4%]
          text-[clamp(110px,28vw,250px)]
          font-black
          leading-none
          text-white/5
        "
      >
        {player.number}
      </p>

      {/* 선수 정보 */}
      <div className="relative z-10 flex h-full flex-col p-[clamp(18px,4vw,40px)]">
        <header className="flex items-center justify-between border-b border-cyan-100/25 pb-3">
          <p className="text-[clamp(8px,1.3vw,12px)] font-bold tracking-[0.2em] text-cyan-100">
            {player.team}
          </p>

          <p className="text-[clamp(10px,1.5vw,14px)] font-bold text-fuchsia-300">
            No.{player.number}
          </p>
        </header>

        <section className="mt-[clamp(12px,2vw,22px)]">
          <p className="text-[clamp(8px,1.2vw,11px)] tracking-[0.28em] text-cyan-300">
            PLAYER PROFILE
          </p>

          <h2 className="mt-1 text-[clamp(28px,5vw,48px)] font-black tracking-[0.08em]">
            {player.name}
          </h2>

          <p className="text-[clamp(9px,1.5vw,14px)] tracking-[0.12em] text-white/60">
            {player.englishName}
          </p>
        </section>

        <div className="mt-[clamp(10px,2vw,20px)] grid grid-cols-2 gap-2">
          <InfoItem label="BIRTH" value={player.birthDate} />

          <InfoItem
            label="POSITION"
            value={`${player.position} · ${player.batsThrows}`}
          />

          <InfoItem label="HEIGHT" value={player.height} />
          <InfoItem label="WEIGHT" value={player.weight} />
        </div>

        {/* 경력 */}
        <div className="mt-2 border border-white/10 bg-white/5 px-3 py-3">
          <p className="text-[clamp(9px,1.35vw,12px)] tracking-[0.16em] text-cyan-200/70">
            CAREER
          </p>

          <p className="mt-1 text-[clamp(11px,1.8vw,17px)] font-semibold leading-relaxed text-white">
            {player.career}
          </p>
        </div>

        {/* 계약금과 연봉 */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          <InfoItem label="SIGNING BONUS" value={player.signingBonus} />
          <InfoItem label="SALARY" value={player.salary} />
        </div>

        {/* 지명순위 */}
        <div className="mt-2 border border-white/10 bg-white/5 px-3 py-3">
          <p className="text-[clamp(9px,1.35vw,12px)] tracking-[0.16em] text-cyan-200/70">
            DRAFT
          </p>

          <p className="mt-1 text-[clamp(11px,1.8vw,17px)] font-semibold text-white">
            {player.draft}
          </p>
        </div>

        <footer className="mt-auto flex items-end justify-between border-t border-cyan-100/20 pt-3">
          <div>
            <p className="text-[clamp(8px,1.1vw,10px)] tracking-[0.14em] text-white/40">
              JOINED
            </p>

            <p className="text-[clamp(10px,1.5vw,14px)] font-semibold">
              {player.joined}
            </p>
          </div>

          <p className="text-[clamp(8px,1.1vw,10px)] text-white/35">
            더블클릭 · 길게 누르기
          </p>
        </footer>
      </div>
    </div>
  );
}

function PlayerCard({ player }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShining, setIsShining] = useState(false);

  const pressTimer = useRef(null);
  const shineTimer = useRef(null);
  const longPressActivated = useRef(false);

  const toggleCard = () => {
    setIsFlipped((current) => !current);
  };

  // PC에서 더블클릭하면 뒤집기
  const handleDoubleClick = () => {
    const canHover = window.matchMedia("(hover: hover)").matches;

    if (canHover) {
      toggleCard();
    }
  };

  // 모바일에서 누르기 시작
  const handleTouchStart = () => {
    longPressActivated.current = false;

    clearTimeout(pressTimer.current);

    pressTimer.current = setTimeout(() => {
      longPressActivated.current = true;
      toggleCard();
    }, 600);
  };

  // 모바일에서 손가락을 뗐을 때
  const handleTouchEnd = () => {
    clearTimeout(pressTimer.current);

    // 길게 눌렀다면 홀로그램을 실행하지 않음
    if (longPressActivated.current) {
      return;
    }

    // 짧게 눌렀다면 홀로그램 실행
    setIsShining(true);

    clearTimeout(shineTimer.current);

    shineTimer.current = setTimeout(() => {
      setIsShining(false);
    }, 700);
  };

  const handleTouchCancel = () => {
    clearTimeout(pressTimer.current);
  };

  return (
    <article className="flex h-full w-full items-center justify-center">
      <div
        role="button"
        tabIndex={0}
        aria-label={`${player.name} 선수 카드`}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onContextMenu={(event) => event.preventDefault()}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            toggleCard();
          }
        }}
        className="
          group
          relative
          inline-block
          cursor-pointer
          select-none
          [perspective:1200px]
          transition-transform
          duration-300
          ease-out
          hover:-rotate-1
          hover:scale-[1.03]
        "
      >
        {/* 앞뒷면 전체를 회전시키는 영역 */}
        <div
          className={`
            relative
            transition-transform
            duration-700
            [transform-style:preserve-3d]
            ${
              isFlipped
                ? "[transform:rotateY(180deg)]"
                : "[transform:rotateY(0deg)]"
            }
          `}
        >
          {/* 카드 앞면 */}
          <div className="relative overflow-hidden rounded-[3%] [backface-visibility:hidden]">
            <img
              src={player.image}
              alt={`${player.name} 선수 카드`}
              draggable={false}
              className="
                block
                h-auto
                w-auto
                max-h-[calc(100dvh-48px)]
                max-w-[calc(100vw-48px)]
                object-contain
                drop-shadow-2xl
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

          {/* 카드 뒷면 */}
          <PlayerCardBack player={player} />
        </div>
      </div>
    </article>
  );
}

export default PlayerCard;