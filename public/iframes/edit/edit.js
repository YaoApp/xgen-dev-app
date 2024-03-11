/**
 * When the component value changes
 * Should Send the change message to the xgen
 * @param {*} target
 */
function onComponentChange(target) {
  const value = target.value;
  const bind = target.dataset.bind;
  const namespace = target.dataset.namespace;

  console.log(
    `Component value changed: ${value} bind: ${bind} namespace: ${namespace}`
  );

  // Send the change message to the xgen
  window.parent.postMessage(
    { type: "change", value: value, bind: bind, namespace: namespace },
    "*"
  );

  // Send the resize message to the xgen
  window.parent.postMessage(
    {
      type: "resize",
      value: { height: "300px", width: "80%" },
      bind: bind,
      namespace: namespace,
    },
    "*"
  );

  // Send the value to the xgen
  // parent.postMessage({ value: value }, "*");
}

/**
 * Get the initial data from the query string
 * When the value changes xgen will reload the iframe
 * This function will be called multiple times
 * @returns
 */
function initData() {
  // Parse the query string
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Xgen definition of the component
  const labelValue = urlParams.get("__label"); // __token , __label, __value, __namespace, __bind
  const bindValue = urlParams.get("__bind");
  const namespaceValue = urlParams.get("__namespace");
  const tokenValue = urlParams.get("__token");
  const typeValue = urlParams.get("__type");
  const disabledValue = urlParams.get("__disabled");

  label.innerHTML = `${labelValue} namespace: ${namespaceValue} bind: ${bindValue}`;
  const initValue = urlParams.get("__value");
  input.value = initValue;
  input.dataset.bind = bindValue;
  input.dataset.namespace = namespaceValue;
  input.dataset.type = typeValue;

  // Custom definition of the component ( DSL props.params )
  const foo = urlParams.get("foo");
  const name = urlParams.get("name");

  console.log(`Label: ${labelValue}`);
  console.log(`Bind: ${bindValue}`);
  console.log(`Namespace: ${namespaceValue}`);
  console.log(`Token: ${tokenValue}`);
  console.log(`Init value: ${initValue}`);
  console.log(`Foo: ${foo}`);
  console.log(`Name: ${name}`);

  return {
    label: labelValue,
    bind: bindValue,
    namespace: namespaceValue,
    token: tokenValue,
    value: initValue,
    foo: foo,
    name: name,
    type: typeValue,
    disabled: disabledValue,
  };
}

// 1. Listen the document ready event
// 2. Parse the query string get the initial data
// 3. Set the initial value
// 4. Set the change event listener
document.addEventListener("DOMContentLoaded", function () {
  const component = document.getElementById("component");
  component.classList.remove("hidden"); //   Remove the hidden class pure JS

  // Bind the event listener to the component
  const label = document.getElementById("label");
  const input = document.getElementById("input");
  input.addEventListener("change", function (e) {
    onComponentChange(e.target);
  });

  // Get the initial data from the query string
  // Set the initial value
  const init = initData();
  input.value = init.value;
  if (init.disabled === "true") {
    input.disabled = true;
  }
  label.innerHTML = `${init.label} namespace: ${init.namespace} bind: ${init.bind} foo: ${init.foo} name: ${init.name} type: ${init.type}`;

  // Set view mode
  // Can set the view mode differently based on the type
  if (init.type == "view") {
    component.classList.add("view-mode");
    // Send the resize message to the xgen
    window.parent.postMessage(
      {
        type: "resize",
        value: { height: "260px" },
        bind: init.bind,
        namespace: init.namespace,
      },
      "*"
    );
  }

  // Could send the resize message to the xgen when the component is ready
  const height = component.offsetHeight;
  console.log(`Component ready height: ${height}px value: ${input.value}`);
});
