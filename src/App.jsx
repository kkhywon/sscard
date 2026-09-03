import { useState } from "react";
import PlayerCard from "./components/PlayerCardComponent";
import players  from "./data/players";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);



  // 선수를 선택했을 때 보여주는 큰 상세 카드
  if (selectedPlayer) {
    return (
      <main className="fixed inset-0 overflow-hidden bg-neutral-950">
        <button
          type="button"
          onClick={() => setSelectedPlayer(null)}
          className="
            absolute
            left-4
            top-4
            z-50
            rounded-full
            border
            border-white/20
            bg-black/60
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            backdrop-blur-md
            transition
            hover:border-cyan-300/60
            hover:bg-white/10
          "
        >
          ← 컬렉션
        </button>

        <div className="h-full w-full">
  <PlayerCard player={selectedPlayer} />
</div>
      </main>
    );
  }

  // 처음에 보여주는 컬렉션 목록
  return (
    <main className="min-h-dvh bg-neutral-950 px-6 py-10 text-white">
      <header className="mx-auto max-w-7xl border-b border-white/15 pb-6">
  <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300">
    SAMSUNG LIONS
  </p>

  <div className="mt-3 flex items-end justify-between gap-4">
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:items-baseline
        md:gap-5
      "
    >
      <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
        PLAYER CARD
      </h1>

      <h2
        className="
          mt-1
          text-xl
          font-light
          tracking-[0.25em]
          text-white/50
          md:mt-0
          md:text-2xl
          md:tracking-[0.18em]
        "
      >
        COLLECTION
      </h2>
    </div>

    <p className="shrink-0 text-sm text-white/50">
      {players.length} {players.length === 1 ? "CARD" : "CARDS"}
    </p>
  </div>
</header>

      <section className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-10">
        {players.map((player) => (
          <button
            key={player.id}
            type="button"
            onClick={() => setSelectedPlayer(player)}
            className="
              group
              w-full
              max-w-[280px]
              cursor-pointer
              text-left
              transition-transform
              duration-300
              hover:-translate-y-2
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[5%]
                border
                border-white/15
                bg-white/5
                p-2
                shadow-2xl
                transition
                duration-300
                group-hover:border-cyan-300/60
                group-hover:shadow-cyan-400/20
              "
            >
              <img
                src={player.image}
                alt={`${player.name} 선수 카드`}
                className="block h-auto w-full rounded-[4%]"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-[150%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-100/30
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-[150%]
                "
              />
            </div>

            <div className="mt-4 flex items-end justify-between px-1">
              <div>
                <p className="text-xs tracking-[0.2em] text-cyan-300">
                  No.{player.number}
                </p>

                <h3 className="mt-1 text-xl font-bold tracking-[0.06em]">
                  {player.name}
                </h3>
              </div>

              <p className="text-sm text-white/45">
                {player.position}
              </p>
            </div>
          </button>
        ))}
      </section>
    </main>
  );
}

export default App;