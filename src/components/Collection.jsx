import players from "../data/players";
import PlayerCardComponent from "./player-card/PlayerCardComponent";

function Collection() {
  return (
    <section
      className="
        min-h-dvh
        w-full
        bg-black
        px-5
        py-8
        text-white

        sm:px-8
        sm:py-10

        lg:px-12
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          gap-8

          lg:flex-row
          lg:items-start
          lg:gap-12
        "
      >
        {/* 카드 컬렉션 */}
        <div
          className="
            order-1
            grid
            min-w-0
            flex-1
            grid-cols-1
            gap-8

            sm:grid-cols-2
            sm:gap-6

            xl:grid-cols-3
            xl:gap-8
          "
        >
          {players.map((player) => (
            <PlayerCardComponent
              key={player.id}
              player={player}
            />
          ))}
        </div>

        {/* COLLECTION 제목 */}
        <div
          className="
            order-2
            flex
            shrink-0
            items-center
            justify-center

            border-t
            border-white/20
            pt-6

            lg:sticky
            lg:top-12
            lg:w-[120px]
            lg:border-l
            lg:border-t-0
            lg:pt-0
            lg:pl-8
          "
        >
          <h1
            className="
              text-sm
              font-semibold
              tracking-[0.4em]
              text-white/70

              lg:[writing-mode:vertical-rl]
              lg:text-base
            "
          >
            COLLECTION
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Collection;