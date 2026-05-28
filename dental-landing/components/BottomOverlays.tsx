"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

// Matches the fade-out-down animation duration in globals.css.
const EXIT_MS = 300;

// Shows the disclaimer 200ms after the services carousel scrolls into view and
// hides it on the way back up to the hero. The X dismisses it for the rest of
// the session (it reappears on reload). The WhatsApp FAB lifts to make room
// while the banner is shown.
export function BottomOverlays() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dismissed = useRef(false);

  // Keep the banner mounted through its fade-out, then unmount.
  useEffect(() => {
    if (showDisclaimer) {
      setMounted(true);
      return;
    }
    if (!mounted) return;
    const t = setTimeout(() => setMounted(false), EXIT_MS);
    return () => clearTimeout(t);
  }, [showDisclaimer, mounted]);

  useEffect(() => {
    const carousel = document.getElementById("services-carousel");
    const hero = document.getElementById("inicio");
    if (!carousel || !hero) return;

    let showTimeout: ReturnType<typeof setTimeout> | undefined;
    const cancelPendingShow = () => {
      clearTimeout(showTimeout);
      showTimeout = undefined;
    };

    // Show 200ms after the services carousel enters view (unless dismissed).
    const carouselIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          cancelPendingShow();
          if (e.isIntersecting && !dismissed.current) {
            showTimeout = setTimeout(() => setShowDisclaimer(true), 200);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    // Hide as soon as the hero is back in view.
    const heroIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            cancelPendingShow();
            setShowDisclaimer(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    carouselIo.observe(carousel);
    heroIo.observe(hero);
    return () => {
      carouselIo.disconnect();
      heroIo.disconnect();
      cancelPendingShow();
    };
  }, []);

  const handleClose = () => {
    dismissed.current = true;
    setShowDisclaimer(false);
  };

  return (
    <>
      <WhatsAppFab raised={showDisclaimer} />
      {mounted && <DisclaimerBanner open={showDisclaimer} onClose={handleClose} />}
    </>
  );
}
