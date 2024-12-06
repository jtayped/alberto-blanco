const Copyright = () => {
  const buildYear = new Date().getFullYear();

  return (
    <p className="text-sm text-muted-foreground">
      &copy; {buildYear} Alberto Blanco. All rights reserved.
    </p>
  );
};

export default Copyright;
