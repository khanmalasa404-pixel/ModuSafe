import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  FlaskConical,
  Stethoscope,
  Dumbbell,
  Utensils,
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "./assets/modusafe-logo.png";

export default function ModuSafeWebsite() {
  const [email, setEmail] = useState("");

  const products = [
    {
      icon: <Stethoscope className="h-7 w-7" />,
      title: "Clinical Hijab",
      desc: "A secure, breathable, hygienic hijab designed for nurses, doctors, dental staff, PSWs, and healthcare students.",
    },
    {
      icon: <FlaskConical className="h-7 w-7" />,
      title: "LabSafe Hijab",
      desc: "A tuck-free, pin-free hijab made for science labs, research environments, and safety-sensitive classrooms.",
    },
    {
      icon: <Dumbbell className="h-7 w-7" />,
      title: "Active Modest Hijab",
      desc: "A lightweight, non-slip hijab for athletes, school teams, gyms, and active everyday movement.",
    },
    {
      icon: <Utensils className="h-7 w-7" />,
      title: "WorkSafe Hijab",
      desc: "Professional modest wear for food service, catering, hospitality, and uniform-based workplaces.",
    },
  ];

  const features = [
    "Pin-free and secure fit",
    "Designed for masks, goggles, and uniforms",
    "Breathable, lightweight materials",
    "No loose ends in safety-sensitive spaces",
    "Washable and disposable options",
    "Built for modesty, comfort, and professionalism",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.13,
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-violet-300/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 45, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-sky-300/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-12%] left-[25%] h-[26rem] w-[26rem] rounded-full bg-indigo-300/30 blur-3xl"
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3"
          >
            <motion.img
              src={logo}
              alt="ModuSafe logo"
              whileHover={{ rotate: 3, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="h-14 w-14 object-contain drop-shadow-md"
            />
            <div>
              <p className="bg-gradient-to-r from-violet-700 via-indigo-700 to-sky-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                ModuSafe
              </p>
              <p className="text-sm text-slate-500">Modesty meets safety</p>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            {["Problem", "Solution", "Products", "Founders"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative transition duration-300 hover:text-violet-700 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-violet-500 after:to-sky-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Button className="rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-6 text-white shadow-lg shadow-violet-200 transition hover:from-violet-700 hover:to-sky-600">
              Join Waitlist
            </Button>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-800 shadow-sm shadow-violet-100"
            >
              <HeartHandshake className="h-4 w-4" />
              Inclusive safety wear for modern workplaces
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-violet-700 via-indigo-700 to-sky-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
            >
              Safety gear should fit everyone.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl"
            >
              ModuSafe creates safety-conscious, professional hijabs and modest PPE for healthcare, labs, sports, food service, and uniform-based workplaces.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="rounded-full bg-gradient-to-r from-violet-600 to-sky-500 px-7 py-6 text-base text-white shadow-xl shadow-violet-200 hover:from-violet-700 hover:to-sky-600">
                  Explore the idea <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="rounded-full border-violet-200 bg-white/70 px-7 py-6 text-base text-violet-800 shadow-sm transition hover:bg-violet-50">
                  See products
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 90 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-violet-300/50 via-indigo-200/50 to-sky-300/50 blur-3xl"
            />
            <Card className="relative overflow-hidden rounded-[2rem] border-violet-100 bg-white/85 shadow-2xl shadow-violet-200/60 backdrop-blur-xl">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-[1.5rem] bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 p-7 text-white shadow-lg"
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-violet-100">First product</p>
                  <h2 className="mt-4 text-3xl font-bold">The Clinical Hijab</h2>
                  <p className="mt-4 leading-7 text-violet-50">
                    A pin-free, breathable, hygienic hijab designed to work with masks, goggles, face shields, uniforms, and long shifts.
                  </p>
                </motion.div>

                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mt-6 grid gap-3">
                  {features.slice(0, 4).map((feature) => (
                    <motion.div
                      key={feature}
                      variants={fadeUp}
                      whileHover={{ x: 7, scale: 1.01 }}
                      className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-50 to-sky-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-violet-600" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="border-y border-violet-100 bg-white/80 py-20 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl px-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">The problem</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Traditional uniforms often treat modesty as an afterthought.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Hijabi women in healthcare, labs, kitchens, sports, and professional workplaces often have to adjust regular hijabs to meet safety, hygiene, and uniform standards. That can create discomfort, safety risks, and barriers to participation.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {["Loose fabric can be unsafe", "Pins can be uncomfortable", "Personal fabric may not meet hygiene needs"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="rounded-3xl border-violet-100 bg-gradient-to-br from-white to-violet-50 shadow-sm transition hover:shadow-xl hover:shadow-violet-100">
                    <CardContent className="p-7 text-lg font-semibold text-slate-800">{item}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="solution" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">Our solution</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Modest PPE designed for real workplaces.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                ModuSafe combines modest fashion, safety-conscious design, and professional uniform needs into one product line. Our goal is to help women show up fully without choosing between faith, comfort, safety, and professionalism.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-3"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-white/80 px-5 py-4 shadow-sm shadow-violet-50 transition hover:border-sky-200 hover:bg-sky-50/70"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-600" />
                  <span className="font-semibold text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="products" className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-indigo-950 to-sky-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.24),transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Product line</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Starting with one product. Expanding into a full safety-wear ecosystem.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="h-full rounded-3xl border-white/10 bg-white/10 text-white shadow-xl backdrop-blur-md transition hover:bg-white/15">
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-sky-200 shadow-inner">
                        {product.icon}
                      </div>
                      <h3 className="text-xl font-bold">{product.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{product.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2"
            >
              <Card className="h-full rounded-3xl border-violet-100 bg-white/85 shadow-sm shadow-violet-100 backdrop-blur">
                <CardContent className="p-8 md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">Impact</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                    We are not just selling hijabs. We are removing a barrier.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    ModuSafe supports Muslim women and modest-dressing individuals in entering and thriving in workplaces where safety and uniform standards matter. Our product gives institutions a practical way to build more inclusive environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
            >
              <Card className="h-full rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 text-white shadow-xl shadow-violet-200">
                <CardContent className="p-8 md:p-10">
                  <Sparkles className="h-8 w-8 text-sky-100" />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-100">Core message</p>
                  <p className="mt-5 text-3xl font-bold leading-tight">
                    No one should choose between safety, professionalism, and modesty.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="founders"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="border-y border-violet-100 bg-white/80 py-20 backdrop-blur"
        >
          <div className="mx-auto max-w-5xl px-5 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-100 to-sky-100 text-violet-700 shadow-sm">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-700">Founder story</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Built by hijabi founders who understand the gap.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              As two hijabi women, we know modesty is not just fashion. It affects how women move through classrooms, workplaces, sports, and professional environments. ModuSafe was created to make safety-wear more inclusive, practical, and empowering.
            </p>
          </div>
        </motion.section>

        <section className="mx-auto max-w-4xl px-5 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, type: "spring", stiffness: 90 }}
          >
            <Card className="overflow-hidden rounded-[2rem] border-violet-100 bg-gradient-to-br from-violet-600 via-indigo-600 to-sky-500 text-white shadow-2xl shadow-violet-200">
              <CardContent className="relative p-8 text-center md:p-12">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail className="mx-auto h-10 w-10 text-sky-100" />
                </motion.div>
                <h2 className="mt-5 text-4xl font-bold tracking-tight">Join the ModuSafe waitlist</h2>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-violet-50">
                  Be first to hear about prototypes, pilot testing, and institutional partnerships.
                </p>
                <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-sky-200/60"
                  />
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                    <Button className="rounded-full bg-slate-950 px-7 py-6 text-base text-white hover:bg-slate-800">
                      Notify me
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-violet-100 bg-white/80 py-8 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
          <p>© 2026 ModuSafe. Modesty meets safety.</p>
          <p>Built for incubator pitch presentation purposes.</p>
        </div>
      </footer>
    </div>
  );
}
