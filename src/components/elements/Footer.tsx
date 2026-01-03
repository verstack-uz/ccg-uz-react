export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Construction Company Group. All rights
        reserved.
      </div>
    </footer>
  );
}
