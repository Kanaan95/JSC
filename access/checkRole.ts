export type UserRole = "super-admin" | "editor" | "content-manager";

export interface UserWithRole {
  id: number | string;
  role?: UserRole | null;
}

/**
 * Checks whether the given user has one of the allowed roles.
 * Reused across every collection/global's access config to avoid
 * duplicating role-checking logic.
 */
export const checkRole = (
  allowedRoles: UserRole[],
  user?: UserWithRole | null,
): boolean => {
  if (!user || !user.role) {
    return false;
  }

  return allowedRoles.includes(user.role);
};
