export function formatKzPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  let local = digits;

  if (local.startsWith("8")) {
    local = local.slice(1);
  } else if (local.startsWith("7")) {
    local = local.slice(1);
  }

  local = local.slice(0, 10);

  let result = "+7";
  if (local.length > 0) {
    result += ` (${local.slice(0, 3)}`;
  }
  if (local.length >= 3) {
    result += ")";
  }
  if (local.length > 3) {
    result += ` ${local.slice(3, 6)}`;
  }
  if (local.length > 6) {
    result += `-${local.slice(6, 8)}`;
  }
  if (local.length > 8) {
    result += `-${local.slice(8, 10)}`;
  }

  return result;
}

export function normalizeKzPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  let local = digits;

  if (local.startsWith("8")) {
    local = local.slice(1);
  } else if (local.startsWith("7")) {
    local = local.slice(1);
  }

  local = local.slice(0, 10);
  return local.length === 10 ? `+7${local}` : "";
}

export function isValidKzPhone(input: string): boolean {
  return /^\+7\d{10}$/.test(normalizeKzPhone(input));
}
