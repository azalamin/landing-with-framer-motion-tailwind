import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = () => {
	const componentRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: componentRef,
		offset: ["0 1", "0.5 1"],
	});

	const scaleValues = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
	const opacityValues = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return {
		componentRef,
		scaleValues,
		opacityValues,
	};
};

export default useScrollGrow;
