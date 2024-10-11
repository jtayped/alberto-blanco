"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const delay = 0.075;
const LinkComponent = ({ data, idx }) => {
  return (
    <Link href={data.href} aria-label={`Link to ${data.text}`}>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: idx * delay },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center gap-2 p-4 text-sm border pl-5 bg-background overflow-hidden"
      >
        <motion.div
          className="absolute left-2 top-1/2 -translate-y-1/2 w-1 bg-primary/90"
          initial={{ height: 0 }}
          animate={{ height: "66.67%" }}
          transition={{ delay: idx * delay + 0.45 }}
        />
        <motion.span
          initial={{ x: -25, opacity: 0, scale: 0.6 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "tween", delay: idx * delay }}
        >
          {data.icon}
        </motion.span>
        <motion.span
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * delay + 0.45 }}
        >
          <p>{data.text}</p>{" "}
          {data.secondaryText && (
            <>
              · <p className="text-muted-foreground">{data.secondaryText}</p>
            </>
          )}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default LinkComponent;
