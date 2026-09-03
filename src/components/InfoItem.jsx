function InfoItem({ label, value }) {
  return (
    <div
      className="
        border
        border-white/10
        bg-white/5
        px-[min(2.8cqw,12px)]
        py-[min(1.8cqw,8px)]
        backdrop-blur-sm
      "
    >
      <p
        className="
          text-[min(2.8cqw,12px)]
          tracking-[0.16em]
          text-cyan-200/70
        "
      >
        {label}
      </p>

      <p
        className="
          mt-[min(0.8cqw,4px)]
          text-[min(4cqw,17px)]
          font-semibold
          text-white
        "
      >
        {value}
      </p>
    </div>
  );
}

export default InfoItem;