"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card w-full max-w-lg p-8 rounded-2xl shadow-lg border border-border"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <Input type="text" placeholder="Votre nom" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" placeholder="exemple@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <Textarea placeholder="Votre message" rows={5} />
          </div>

          <Button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105"
          >
            Envoyer
          </Button>
        </form>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href="https://github.com/MohnajibG"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github size={22} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/najib-guerchaoui/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin size={22} /> LinkedIn
          </a>
          <a
            href="mailto:mngdevpro@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={22} /> Email
          </a>
          <a
            href="tel:0658748308"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={22} /> Téléphone
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
