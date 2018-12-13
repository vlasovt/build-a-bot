// this declaration includes bind() and update() lifecycle hooks in one. Its a shortcut

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
}
