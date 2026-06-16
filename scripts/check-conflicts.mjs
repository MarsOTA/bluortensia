import { execFileSync } from "node:child_process";

const markerPattern = ["<{7}", "={7}", ">{7}"].join("|");
const args = [
  "-n",
  markerPattern,
  ".",
  "--glob",
  "!node_modules/**",
  "--glob",
  "!.next/**",
];

try {
  const output = execFileSync("rg", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  process.stderr.write(output);
  process.exit(1);
} catch (error) {
  if (error.status === 1) {
    console.log("No Git conflict markers found.");
    process.exit(0);
  }

  process.stderr.write(error.stderr?.toString() ?? String(error));
  process.exit(error.status ?? 1);
}
