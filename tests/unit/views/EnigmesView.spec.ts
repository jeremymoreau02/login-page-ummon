import { mount } from '@vue/test-utils';
import EnigmesView from '@/views/EnigmesView.vue';

describe('EnigmesView', () => {
  it('should render the correct number of enigmes', () => {
    const enigmes = [
      { id: 1, question: 'Question 1', reponse: 'Réponse 1' },
      { id: 2, question: 'Question 2', reponse: 'Réponse 2' },
      { id: 3, question: 'Question 3', reponse: 'Réponse 3' },
    ];
    const wrapper = mount(EnigmesView, {
      global: {
        provide: {
          store: {
            getters: {
              getAllEnigmes: enigmes,
            },
          },
        },
      },
    });

    const enigmeCards = wrapper.findAll('.enigme-card');
    expect(enigmeCards.length).toBe(enigmes.length);
  });

  it('should render enigmes correctly', () => {
    const enigmes = [
      { id: 1, question: 'Question 1', reponse: 'Réponse 1' },
      { id: 2, question: 'Question 2', reponse: 'Réponse 2' },
      { id: 3, question: 'Question 3', reponse: 'Réponse 3' },
    ];
    const wrapper = mount(EnigmesView, {
      global: {
        provide: {
          store: {
            getters: {
              getAllEnigmes: enigmes,
            },
          },
        },
      },
    });

    const enigmeCards = wrapper.findAll('.enigme-card');
    enigmeCards.forEach((enigmeCard, index) => {
      const enigme = enigmes[index];
      const questionText = `Question: ${enigme.question}`;
      const reponseText = `Réponse: ${enigme.reponse}`;

      expect(enigmeCard.find('.enigme-question').text()).toBe(questionText);
      expect(enigmeCard.find('.enigme-reponse').text()).toBe(reponseText);
    });
  });
});