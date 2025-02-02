export default defineAppConfig({
  ui: {
    primary: 'spring-green',
    gray: 'slate',
    notifications: {
      position: 'top-[unset] left-[unset] bottom-0 right-0',
    },
    button: {
      base: 'transition-colors duration-200',
      default: {
        size: 'sm',
        variant: 'solid',
      },
      padding: {
        sm: 'p-button',
      },
      variant: {
        ghost: 'bg-transparent hover:bg-gray-950/10 hover:dark:bg-gray-400/10',
      },
    },
    card: {
      ring: 'ring-1 ring-gray-950/10 dark:ring-gray-50/10',
      divide: 'divide-y divide-gray-950/10 dark:divide-gray-50/10',
      background: 'bg-gray-100 dark:bg-gray-900',
    },
    input: {
      base: 'transition-colors duration-200',
      default: {
        size: 'sm',
        variant: 'outline',
        color: 'primary',
      },
      padding: {
        sm: 'px-2.5 py-2',
      },
      variant: {
        outline:
          'bg-gray-50 dark:bg-gray-950 ring-0 border border-gray-50/10 dark:border-gray-50/10 focus:ring-0 focus:border-primary dark:focus:border-primary',
      },
    },
    popover: {
      base: 'mt-1',
      ring: 'ring-1 ring-gray-950/10 dark:ring-gray-50/10',
      overlay: {
        background: 'bg-gray-950/10 dark:bg-gray-950/60',
      },
    },
    modal: {
      overlay: {
        background: 'bg-gray-950/10 dark:bg-gray-950/60',
      },
    },
  },
});
