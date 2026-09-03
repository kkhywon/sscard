import InfoItem from "./InfoItem";

function PlayerCardBack({ player }) {
  return (
    <div
      className="
        absolute
        inset-0
        h-full
        w-full
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
        [-webkit-backface-visibility:hidden]
        [transform:rotateY(180deg)_translateZ(0)]
      "
    >
      {/* 
        카드 자체를 기준으로 반응형 계산
        cqw = 카드 너비 기준
      */}
      <div
        className="
          absolute
          inset-0
          h-full
          w-full
          [container-type:inline-size]
        "
      >
        {/* 왼쪽 위 배경 빛 */}
        <div
          className="
            absolute
            -left-1/4
            -top-1/4
            h-1/2
            w-1/2
            rounded-full
            bg-cyan-300/25
            blur-3xl
          "
        />

        {/* 오른쪽 아래 배경 빛 */}
        <div
          className="
            absolute
            -bottom-1/4
            -right-1/4
            h-1/2
            w-1/2
            rounded-full
            bg-fuchsia-500/20
            blur-3xl
          "
        />

        {/* 안쪽 테두리 */}
        <div
          className="
            pointer-events-none
            absolute
            inset-[2.5%]
            border-2
            border-cyan-100/20
          "
        />

        {/* 배경 등번호 */}
        <p
          className="
            pointer-events-none
            absolute
            -right-[4%]
            top-[4%]
            text-[min(35cqw,250px)]
            font-black
            leading-none
            text-white/5
          "
        >
          {player.number}
        </p>

        {/* 선수 정보 전체 */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            flex-col
            p-[min(6cqw,40px)]
          "
        >
          {/* 상단 */}
          <header
            className="
              flex
              items-center
              justify-between
              border-b
              border-cyan-100/25
              pb-[min(2cqw,12px)]
            "
          >
            <p
              className="
                text-[min(2.8cqw,12px)]
                font-bold
                tracking-[0.2em]
                text-cyan-100
              "
            >
              {player.team}
            </p>

            <p
              className="
                text-[min(3.3cqw,14px)]
                font-bold
                text-fuchsia-300
              "
            >
              No.{player.number}
            </p>
          </header>

          {/* 선수 이름 */}
          <section className="mt-[min(3.5cqw,22px)]">
            <p
              className="
                text-[min(2.6cqw,11px)]
                tracking-[0.28em]
                text-cyan-300
              "
            >
              PLAYER PROFILE
            </p>

            <h2
              className="
                mt-[min(1cqw,4px)]
                text-[min(11cqw,48px)]
                font-black
                tracking-[0.08em]
                leading-none
              "
            >
              {player.name}
            </h2>

            <p
              className="
                mt-[min(1.5cqw,6px)]
                text-[min(3.2cqw,14px)]
                tracking-[0.12em]
                text-white/60
              "
            >
              {player.englishName}
            </p>
          </section>

          {/* 기본 정보 */}
          <div
            className="
              mt-[min(3cqw,20px)]
              grid
              grid-cols-2
              gap-[min(1.8cqw,8px)]
            "
          >
            <InfoItem
              label="BIRTH"
              value={player.birthDate}
            />

            <InfoItem
              label="POSITION"
              value={`${player.position} · ${player.batsThrows}`}
            />

            <InfoItem
              label="HEIGHT"
              value={player.height}
            />

            <InfoItem
              label="WEIGHT"
              value={player.weight}
            />
          </div>

          {/* CAREER */}
          <div
            className="
              mt-[min(1.8cqw,8px)]
              border
              border-white/10
              bg-white/5
              px-[min(2.8cqw,12px)]
              py-[min(2.3cqw,12px)]
            "
          >
            <p
              className="
                text-[min(2.8cqw,12px)]
                tracking-[0.16em]
                text-white
              "
            >
              CAREER
            </p>

            <p
              className="
                mt-[min(0.8cqw,4px)]
                text-[min(4cqw,17px)]
                font-semibold
                leading-relaxed
                text-white
              "
            >
              {player.career}
            </p>
          </div>

          {/* 계약금 / 연봉 */}
          <div
            className="
              mt-[min(1.8cqw,8px)]
              grid
              grid-cols-2
              gap-[min(1.8cqw,8px)]
            "
          >
            <InfoItem
              label="SIGNING BONUS"
              value={player.signingBonus}
            />

            <InfoItem
              label="SALARY"
              value={player.salary}
            />
          </div>

          {/* DRAFT */}
          <div
            className="
              mt-[min(1.8cqw,8px)]
              border
              border-white/10
              bg-white/5
              px-[min(2.8cqw,12px)]
              py-[min(2.3cqw,12px)]
            "
          >
            <p
              className="
                text-[min(2.8cqw,12px)]
                tracking-[0.16em]
                text-cyan-200/70
              "
            >
              DRAFT
            </p>

            <p
              className="
                mt-[min(0.8cqw,4px)]
                text-[min(4cqw,17px)]
                font-semibold
                text-white
              "
            >
              {player.draft}
            </p>
          </div>

          {/* 하단 */}
         <footer
  className="
    mt-auto
    mb-[min(2cqw,30px)]
    flex
    items-end
    justify-between
    border-t
    border-cyan-100/20
    pt-[min(2cqw,12px)]
  "
>
            <div>
              <p
                className="
                  text-[min(2.3cqw,6px)]
                  tracking-[0.14em]
                  text-white/40
                "
              >
                JOINED
              </p>

              <p
                className="
                  text-[min(3.2cqw,14px)]
                  font-semibold
                  text-white
                "
              >
                {player.joined}
              </p>
            </div>

            <p
              className="
                text-[min(2.3cqw,10px)]
                text-white/35
              "
            >
              더블클릭 · 두 번 터치
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PlayerCardBack;