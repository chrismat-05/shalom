import HeroSlider from "../components/HeroSlider";
import FrostedCard from "../components/FrostedCard";
import OnboardingModal from "../components/OnboardingModal";

export default function Home() {
  return (
        <div className="pt-20 pb-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <HeroSlider />

      <OnboardingModal />

      <section className="mt-12" id="about">
        <FrostedCard>
          <h2 className="text-2xl font-bold text-royal mb-2">About IPC Shalom</h2>
          <p className="text-textSecondary">
            IPC Shalom Bahrain is a Spirit-filled, Christ-centered church with a heart for people and a mission to share God’s love. Whether you're new to faith or looking for a spiritual family, we welcome you to grow, worship, and serve with us.
          </p>
        </FrostedCard>
      </section>

      <section className="mt-12">
        <FrostedCard>
          <h2 className="text-2xl font-bold text-royal mb-2">Join Us In-Person</h2>
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-textSecondary">We meet every Friday and Sunday. Visit us and be part of our growing family.</p>
        </FrostedCard>
      </section>

      <section className="mt-12" id="contact">
        <FrostedCard>
          <h2 className="text-2xl font-bold text-royal mb-2">Reach Out</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="grid gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 rounded bg-white/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 rounded bg-white/50"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message or Prayer Request"
              required
              className="p-2 rounded bg-white/50"
            ></textarea>
            <button
              type="submit"
              className="bg-royal text-white py-2 px-4 rounded hover:opacity-90"
            >
              Send Message
            </button>
            <p className="text-sm text-textSecondary">Service Timings: Fridays 7:30 PM, Sundays 6:30 PM</p>
          </form>
        </FrostedCard>
      </section>
    </div>
  );
}