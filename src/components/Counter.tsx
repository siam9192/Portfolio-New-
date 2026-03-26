import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Counter = ({ targetValue }:{targetValue:number}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, targetValue, { duration: 5 });
    return controls.stop;
  }, [targetValue]);

  return <motion.span>{rounded}</motion.span>;
};export default Counter