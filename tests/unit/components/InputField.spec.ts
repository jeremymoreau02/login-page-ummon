import { mount } from '@vue/test-utils';
import InputField from '@/components/InputField.vue';
import { ElInput, ElCheckbox } from 'element-plus';

// Mock des composants Element Plus
jest.mock('element-plus', () => ({
  ElInput: {
    template: '<div></div>',
    props: ['modelValue', 'type', 'placeholder'],
    emits: ['update:modelValue'],
  },
  ElCheckbox: {
    template: '<div></div>',
    props: ['modelValue', 'label', 'size'],
    emits: ['update:modelValue'],
  },
}));

describe('InputField', () => {
  it('renders correctly', () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'Test Label',
        value: 'Test Value',
        placeholder: 'Test Placeholder',
        type: 'text',
      },
    });

    // Vérifie la présence des composants Element Plus
    expect(wrapper.findComponent(ElInput).exists()).toBe(true);
    expect(wrapper.findComponent(ElCheckbox).exists()).toBe(false);

    // Vérifie les valeurs des props
    expect(wrapper.props('label')).toBe('Test Label');
    expect(wrapper.props('value')).toBe('Test Value');
    expect(wrapper.props('placeholder')).toBe('Test Placeholder');
    expect(wrapper.props('type')).toBe('text');
  });

  it('emits updateValue event when input value changes', async () => {
    const wrapper = mount(InputField, {
        props: {
          label: 'Test Label',
          value: 'Test Value',
          placeholder: 'Test Placeholder',
          type: 'text',
        },
      });
    
      // Simule la saisie d'une nouvelle valeur dans l'input
      await wrapper.findComponent(ElInput).vm.$emit('update:modelValue', 'New Value');
    
      // Vérifie que l'événement updateValue a été émis avec la nouvelle valeur
      expect(wrapper.emitted('updateValue')).toBeTruthy();
      expect(wrapper.emitted('updateValue')![0][0]).toBe('New Value');
  });
});
