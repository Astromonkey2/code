'use client';
import { motion } from 'framer-motion';
export default function HeroTitle(){return(<motion.h1 initial={{opacity:0,y:-20}}animate={{opacity:1,y:0}}transition={{duration:0.6}}className="text-5xl font-bold mb-6">Find Your Document using <motion.span initial={{scale:0.8}}animate={{scale:[1,1.2,1]}}transition={{repeat:Infinity,duration:2}}className="text-brand">keyword(s)</motion.span> <motion.span initial={{rotate:0}}animate={{rotate:[0,20,-20,0]}}transition={{repeat:Infinity,duration:2}}className="inline-block">✨</motion.span></motion.h1>);
}
