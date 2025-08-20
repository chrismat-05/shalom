import { AlertTriangle, Clock, MapPin, Phone, Facebook, Instagram, Youtube, Calendar, User, Users } from "lucide-react";

const CompactHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 glow-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 accent-gradient text-white py-3 px-4 animate-fade-in shadow-primary">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <AlertTriangle className="h-4 w-4 animate-pulse" />
          <span>This is just a temporary page.. We're working on bringing back our site up very soon!</span>
          <AlertTriangle className="h-4 w-4 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-scale-in">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              <img
                src="public/IPC Shalom.png"
                alt="IPC Shalom Logo"
                className="relative mx-auto h-28 w-28 shadow-card rounded-full bg-white"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3">
              IPC <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Shalom</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 font-medium">
              The Indian Pentecostal Church of God
            </p>
            <div className="flex items-center justify-center gap-8 text-sm mb-8">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">Est. 1981</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <User className="h-4 w-4 text-secondary" />
                <span className="font-medium">Pastor Saji Thomas</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            <div className="card-gradient rounded-3xl p-8 shadow-card border border-secondary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="bg-secondary/20 p-2 rounded-xl">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                Our Meetings
              </h2>
              <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-xl border-l-4 border-red-500 hover:shadow-md transition-all">
                    <span className="font-semibold text-foreground">Sunday Worship</span>
                    <span className="text-red-500 font-medium">Sun 7:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-all">
                    <span className="font-semibold text-foreground">Gospel Meeting</span>
                    <span className="text-green-500 font-medium">Fri 7:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-xl border-l-4 border-red-500 hover:shadow-md transition-all">
                    <span className="font-semibold text-foreground">Tamil Worship</span>
                    <span className="text-red-500 font-medium">Fri 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-all">
                    <span className="font-semibold text-foreground">CBS</span>
                    <span className="text-green-500 font-medium">Fri 11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-white/70 rounded-xl border-l-4 border-red-500 hover:shadow-md transition-all">
                    <span className="font-semibold text-foreground">Prayer Meetings</span>
                    <span className="text-red-500 font-medium">Thu 7:30 PM</span>
                  </div>
              </div>
              <div className="mt-6 pt-4 border-t border-secondary/20">
                <div className="flex items-center gap-3 text-sm bg-secondary/10 p-3 rounded-xl">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-foreground">All meetings at Church Villa</span>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-3xl p-8 shadow-card border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-4 text-secondary flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Connect
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+97335041017"
                      className="flex items-center gap-3 p-3 bg-white/70 rounded-xl hover:bg-primary/10 hover:shadow-md transition-all group"
                    >
                      <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">+973 3504 1017</span>
                    </a>
                    <a 
                      href="tel:+97339451498"
                      className="flex items-center gap-3 p-3 bg-white/70 rounded-xl hover:bg-primary/10 hover:shadow-md transition-all group"
                    >
                      <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">+973 3945 1498</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-secondary flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Visit Us
                  </h3>
                  <a 
                    href="https://maps.app.goo.gl/UumX9nYhTDySUuWg6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white/70 rounded-xl hover:bg-secondary/10 hover:shadow-md transition-all group"
                  >
                    <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors">
                      <MapPin className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="font-medium">Church Villa</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-secondary flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/ipcshalombh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 p-3 rounded-xl hover:bg-blue-500/20 hover:shadow-md transition-all group"
                  >
                    <Facebook className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.instagram.com/ipcshalombh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500/10 p-3 rounded-xl hover:bg-pink-500/20 hover:shadow-md transition-all group"
                  >
                    <Instagram className="h-5 w-5 text-pink-600 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ipcshalombh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500/10 p-3 rounded-xl hover:bg-red-500/20 hover:shadow-md transition-all group"
                  >
                    <Youtube className="h-5 w-5 text-red-600 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="text-muted-foreground font-medium">© 2025 IPC Shalom. All rights reserved.</div>
              <div className="text-muted-foreground">
                Built by{" "}
                <a 
                  href="https://thecma.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-primary transition-all"
                >
                  CMA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactHero;