const Footer = () => {
  return (
    <footer className="border-t border-border mt-12 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} FemAxeHub. All rights reserved.</p>
        <p className="mt-1">Celebrating the artistry of female guitarists worldwide.</p>
      </div>
    </footer>
  );
};

export default Footer;
