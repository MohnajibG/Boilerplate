/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthFormProps {
  type: "login" | "register";
}

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (type === "register" && password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    try {
      if (type === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Mettre à jour le displayName
        if (userCredential.user && name) {
          await updateProfile(userCredential.user, { displayName: name });
        }
      }
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card w-full max-w-md p-8 rounded-2xl shadow-lg border border-border"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          {type === "login" ? "Connexion" : "Créer un compte"}
        </h1>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm text-center mb-4"
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {type === "register" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Nom complet
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom complet"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {type === "register" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirmer le mot de passe
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-3 font-semibold bg-primary text-primary-foreground shadow-lg transition-all disabled:opacity-70"
            disabled={loading}
          >
            {loading
              ? type === "login"
                ? "Connexion..."
                : "Création..."
              : type === "login"
                ? "Se connecter"
                : "S'inscrire"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-5">
          {type === "login" ? (
            <>
              Pas encore de compte ?{" "}
              <Link
                href="/register"
                className="text-primary font-medium hover:underline"
              >
                S’inscrire
              </Link>
            </>
          ) : (
            <>
              Déjà un compte ?{" "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Se connecter
              </Link>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
};
