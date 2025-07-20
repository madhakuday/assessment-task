interface IProps {
  label: string;
  from: string;
  to: string;
  setFrom: (val: string) => void;
  setTo: (val: string) => void;
  min: number;
  max: number;
  step?: number;
}

export const CustomRange = ({
  label,
  from,
  to,
  setFrom,
  setTo,
  min,
  max,
  step = 1,
}: IProps) => (
  <div className="flex flex-col sm:flex-row items-center gap-2">
    <label className="text-sm font-medium whitespace-nowrap">{label}</label>
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      placeholder="From"
      className="w-20 p-1 border border-gray-300 rounded"
      value={from}
      onChange={(e) => setFrom(e.target.value)}
    />
    <span>-</span>
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      placeholder="To"
      className="w-20 p-1 border border-gray-300 rounded"
      value={to}
      onChange={(e) => setTo(e.target.value)}
    />
  </div>
);
