type SectionHeaderProps = {
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  className?: string;
};

const SectionHeader = ({
  title,
  highlight,
  description,
  center = true,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div
      className={`${center ? "text-center mx-auto" : ""} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm lg:text-base font-secondary text-gray-400 mt-2 leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
