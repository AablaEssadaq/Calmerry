export default function Progress({ value = 0 }) {
    return (
      <div 
        className={`relative h-[5px] w-full overflow-hidden rounded-full bg-light-blue`}
      >
        <div 
          className="h-[5px] bg-dark-blue transition-all duration-300 ease-in-out"
          style={{ 
            width: `${Math.min(100, Math.max(0, value))}%`,
          }}
        />
      </div>
    );
  }