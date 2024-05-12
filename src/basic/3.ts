// Змінна, яка може містити або рядок, або число (union type)
let variable: string | number;

// Приклади використання
variable = 'Hello'; // Рядок
variable = 42; // Число

// Змінна, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type)
type EnableOrDisable = 'enable' | 'disable';
let state: EnableOrDisable;

state = 'enable'; // Припустиме значення
state = 'disable'; // Припустиме значення
// status = 'on'; // Помилка компіляції: Неприпустиме значення
