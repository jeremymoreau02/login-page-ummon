import { shallowMount } from "@vue/test-utils";
import CustomButton from "@/components/CustomButton.vue";

describe("CustomButton.vue", () => {
  const label = "Mon Bouton";

  it("devrait afficher le texte du bouton", () => {
    const wrapper = shallowMount(CustomButton, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });

  it("devrait émettre un événement 'click' lors du clic sur le bouton", async () => {
    const wrapper = shallowMount(CustomButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("devrait avoir le type par défaut 'primary'", () => {
    const wrapper = shallowMount(CustomButton);
    expect(wrapper.props("type")).toBe("primary");
  });

  it("devrait accepter un type personnalisé", () => {
    const customType = "warning";
    const wrapper = shallowMount(CustomButton, {
      props: { type: customType, label },
    });
    expect(wrapper.props("type")).toBe(customType);
  });

  it("devrait avoir la taille par défaut 'large'", () => {
    const wrapper = shallowMount(CustomButton);
    expect(wrapper.props("size")).toBe("large");
  });

  it("devrait accepter une taille personnalisée", () => {
    const customSize = "small";
    const wrapper = shallowMount(CustomButton, {
      props: { size: customSize, label },
    });
    expect(wrapper.props("size")).toBe(customSize);
  });
});
