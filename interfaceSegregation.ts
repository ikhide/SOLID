interface IPrinter {
  print(): void;
  fax(): void;
  scan(): void;
  scanPhoto(): void;
}

// THe above has low cohesion for a printer. ALso, not all printers have the same features. Separate into different interfaces.

interface IPrint {
  print(): void;
}

interface IFax {
  fax(): void;
}

interface IScan {
  scan?(): void;
  scanPhoto(): void;
}

class Machine1 implements IPrint {
  print() {}
}

class Machine2 implements IPrint, IFax {
  print() {}
  fax() {}
}

class Machine3 implements IPrint, IFax, IScan {
  print() {}
  fax() {}
  scanPhoto() {}
}
