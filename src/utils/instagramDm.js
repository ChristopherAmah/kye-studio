const INSTAGRAM_DM_HANDLE = "cashflowsteadysniping";

const INSTAGRAM_DM_BASE_URL = `https://ig.me/m/${INSTAGRAM_DM_HANDLE}`;

export function buildInstagramDmLink() {
  return INSTAGRAM_DM_BASE_URL;
}

export function buildInstagramDmText(project) {
  const parts = ["Hey, I would like to have this piece."];

  if (project?.title) {
    parts.push(`Piece: ${project.title}`);
  }

  if (project?.category) {
    parts.push(`Category: ${project.category}`);
  }

  // if (project?.image) {
  //   const imageUrl = new URL(project.image, window.location.origin).href;
  //   parts.push(`Image: ${imageUrl}`);
  // }

  return parts.join("\n");
}

export async function openInstagramDm(project) {
  const message = buildInstagramDmText(project);

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(message);
    } catch {
      // Ignore clipboard failures and still open the DM thread.
    }
  }

  window.open(INSTAGRAM_DM_BASE_URL, "_blank", "noopener,noreferrer");
}
