import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, FlaskConical, Stethoscope, Dumbbell, Utensils, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">ModuSafe</p>
              <p className="text-xs text-slate-500">Modesty meets safety</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#problem" className="hover:text-emerald-700">Problem</a>
            <a href="#solution" className="hover:text-emerald-700">Solution</a>
            <a href="#products" className="hover:text-emerald-700">Products</a>
            <a href="#founders" className="hover:text-emerald-700">Founders</a>
          </nav>
          <Button className="rounded-full bg-emerald-700 px-5 hover:bg-emerald-800">
            Join Waitlist
          </Button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
              <HeartHandshake className="h-4 w-4" />
              Inclusive safety wear for modern workplaces
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 md:text-7xl">
              Safety gear should fit everyone.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              ModuSafe creates safety-conscious, professional hijabs and modest PPE for healthcare, labs, sports, food service, and uniform-based workplaces.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-emerald-700 px-7 py-6 text-base hover:bg-emerald-800">
                Explore the idea <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-emerald-200 px-7 py-6 text-base text-emerald-800 hover:bg-emerald-50">
                See products
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-200/50 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-emerald-100 bg-white shadow-2xl">
              <CardContent className="p-8">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-700 to-teal-600 p-7 text-white">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">First product</p>
                  <h2 className="mt-4 text-3xl font-bold">The Clinical Hijab</h2>
                  <p className="mt-4 leading-7 text-emerald-50">
                    A pin-free, breathable, hygienic hijab designed to work with masks, goggles, face shields, uniforms, and long shifts.
                  </p>
                </div>
                <div className="mt-6 grid gap-3">
                  {features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="problem" className="border-y border-emerald-100 bg-white py-20">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">The problem</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Traditional uniforms often treat modesty as an afterthought.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Hijabi women in healthcare, labs, kitchens, sports, and professional workplaces often have to adjust regular hijabs to meet safety, hygiene, and uniform standards. That can create discomfort, safety risks, and barriers to participation.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {["Loose fabric can be unsafe", "Pins can be uncomfortable", "Personal fabric may not meet hygiene needs"].map((item) => (
                <Card key={item} className="rounded-3xl border-stone-200 bg-stone-50 shadow-sm">
                  <CardContent className="p-7 text-lg font-semibold text-slate-800">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">Our solution</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Modest PPE designed for real workplaces.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                ModuSafe combines modest fashion, safety-conscious design, and professional uniform needs into one product line. Our goal is to help women show up fully without choosing between faith, comfort, safety, and professionalism.
              </p>
            </div>
            <div className="grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">Product line</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Starting with one product. Expanding into a full safety-wear ecosystem.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Card key={product.title} className="rounded-3xl border-white/10 bg-white/5 text-white shadow-xl backdrop-blur-sm">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-200">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{product.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-3xl border-emerald-100 bg-white shadow-sm md:col-span-2">
              <CardContent className="p-8 md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">Impact</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  We are not just selling hijabs. We are removing a barrier.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  ModuSafe supports Muslim women and modest-dressing individuals in entering and thriving in workplaces where safety and uniform standards matter. Our product gives institutions a practical way to build more inclusive environments.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-emerald-700 text-white shadow-sm">
              <CardContent className="p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">Core message</p>
                <p className="mt-5 text-3xl font-bold leading-tight">
                  No one should choose between safety, professionalism, and modesty.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="founders" className="border-y border-emerald-100 bg-white py-20">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700">Founder story</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Built by hijabi founders who understand the gap.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              As two hijabi women, we know modesty is not just fashion. It affects how women move through classrooms, workplaces, sports, and professional environments. ModuSafe was created to make safety-wear more inclusive, practical, and empowering.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20">
          <Card className="rounded-[2rem] border-emerald-100 bg-gradient-to-br from-emerald-700 to-teal-600 text-white shadow-2xl">
            <CardContent className="p-8 text-center md:p-12">
              <Mail className="mx-auto h-10 w-10 text-emerald-100" />
              <h2 className="mt-5 text-4xl font-bold tracking-tight">Join the ModuSafe waitlist</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-50">
                Be first to hear about prototypes, pilot testing, and institutional partnerships.
              </p>
              <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400"
                />
                <Button className="rounded-full bg-slate-950 px-7 py-6 text-base text-white hover:bg-slate-800">
                  Notify me
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
          <p>© 2026 ModuSafe. Modesty meets safety.</p>
          <p>Built for incubator pitch presentation purposes.</p>
        </div>
      </footer>
    </div>
  );
}
