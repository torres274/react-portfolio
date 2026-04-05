import { useScroll, useSpring, motion } from 'framer-motion'

// Thin bar fixed at the very top of the viewport.
// scaleX is driven by scroll progress (0 → 1) with a spring for smooth lag.
const ProgressBar = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 28,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className="ProgressBar"
            style={{ scaleX }}
            aria-hidden="true"
        />
    )
}

export default ProgressBar
