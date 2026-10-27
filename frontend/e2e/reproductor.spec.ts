// Recorrido real en la versión web: idioma → bienvenida → escanear → reproducir.
import { expect, test } from "@playwright/test";

test("elegir idioma, escanear la biblioteca y reproducir una canción", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("./");
  await expect(page.getByText("Elige tu idioma")).toBeVisible();
  await page.getByText("Empezar", { exact: true }).click();
  await page.getByText("Permitir acceso", { exact: true }).click();
  await page.getByText("Escanear carpetas", { exact: true }).click();
  await expect(page.getByText("Crystal Cave").first()).toBeVisible({ timeout: 15_000 });
  await page.getByText("Crystal Cave").first().click();
  await expect(page.getByText("Reproduciendo ahora")).toBeVisible();
  expect(errors).toEqual([]);
});
