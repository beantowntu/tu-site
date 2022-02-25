with import <nixpkgs> {};

mkShell {
  packages = [
    nodejs-14_x
  ];

  GIT_SSH_COMMAND = let
    key = toString ../keys/id_ed25519;
  in "ssh -i ${key} -o IdentitiesOnly=yes";
}
