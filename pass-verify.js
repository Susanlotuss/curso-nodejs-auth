const bcrypt = require('bcrypt');

async function verifyPassword() {
  // pass en crudo
  const myPassword = 'admin 123 .202';
  // hash del pass (encriptacion del pass en crudo)
  const hash = '$2b$10$Tku7qMKgSLTps8h4yINYE.C5YfRvYCs/rfiDQJXPtPHYFnYhoFYAa';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
