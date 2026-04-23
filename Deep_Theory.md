#  Day 25 – Framer Motion & Advanced Animation Concepts

##  1. Framer Motion Animation System
🔹  Framer Motion -
A React animation library used to create smooth, interactive UI animations
Built on top of React components
Uses simple props like animate, initial, exit
Works with gestures, transitions, layout animations

🔹  Use of Framer Motion -
Easy to implement compared to CSS/JS animations
Declarative syntax (less code, more clarity)
Supports complex animations with minimal effort
Built-in support for:
Page transitions
Drag & gestures
Scroll animations

🔹 Core Components
motion.div, motion.button, etc.
These are animated versions of HTML elements
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Hello Animation
</motion.div>

##  2. Variants, Transitions & Gestures

🔹 Variants (Reusable Animation States)
Used to define multiple animation states
Helps in organizing animation logic
const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
/>

 Advantages :
Clean code
Reusable animation logic
Easy to manage complex animations

🔹 Transitions
Control how animation behaves
Defines speed, delay, easing
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>

🔹 Types of Transitions
duration → Time of animation
delay → Start delay
ease → Motion curve
type → spring, tween, inertia
transition={{
  type: "spring",
  stiffness: 100,
  damping: 10
}}

🔹 Gestures (User Interactions)
Animations triggered by user actions

 Types of Gestures:
 1)whileHover
 2)whileTap
 3)drag
 4)whileDrag
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
 Drag Example:
<motion.div drag />

 Use Cases:
Buttons
Cards
Interactive UI
Games


##  3. Page Transition Design

🔹  Page Transitions -
Animations when navigating between pages
Improves user experience (UX)

🔹 Importantance -
Makes app feel smooth & modern
Reduces abrupt changes
Adds visual continuity

🔹 Key Concept: AnimatePresence
Enables exit animations when components leave DOM
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {show && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>

🔹 Example Page Transition
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" }
};

<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.5 }}
>
  Page Content
</motion.div>


##  4. Scroll Animations (Conceptual Intro)

🔹  Scroll Animations -
Animations triggered when user scrolls
Used for revealing content dynamically

🔹 Methods in Framer Motion -
1) whileInView
Triggers animation when element enters viewport
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Scroll Content
</motion.div>
2) viewport Property
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Animate Once
</motion.div>

🔹 Use Cases
Landing pages
Portfolio websites
Product showcases

🔹 Benefits
Improves engagement
Makes UI visually appealing
Guides user attention
