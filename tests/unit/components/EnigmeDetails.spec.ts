import { shallowMount } from '@vue/test-utils';
import EnigmeDetails from '@/components/EnigmeDetails.vue';
import { Enigme } from '@/types/Enigme';

describe('EnigmeDetails.vue', () => {
  it('renders enigme.question when enigme exists', () => {
    const enigme: Enigme = {
      id: 1,
      question: "Quel est le mot de passe ?",
      reponse: "password"
    }
    const wrapper = shallowMount(EnigmeDetails, {
      propsData: { enigme }
    });
    expect(wrapper.text()).toMatch(enigme.question);
  });

  it('renders "Énigme non trouvée." when enigme is null', () => {
    const wrapper = shallowMount(EnigmeDetails, {
      propsData: { enigme: null }
    });
    expect(wrapper.text()).toMatch("Énigme non trouvée.");
  });

  it('renders "Voir les réponses" link', () => {
    const enigme: Enigme = {
        id: 1,
        question: "Quel est le mot de passe ?",
        reponse: "password"
    }
    const wrapper = shallowMount(EnigmeDetails, {
      propsData: { enigme }
    });
    const link = wrapper.find('router-link');
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe("Voir les réponses");
  });

});