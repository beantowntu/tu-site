with import <nixpkgs> {};

mkShell {
  name = "bostontenantsunion.org";

  packages = [
    nodejs-14_x
  ];

  GIT_SSH_COMMAND = let
    key = toString ../keys/id_ed25519;
  in "ssh -i ${key} -o IdentitiesOnly=yes";
}
