import { mount } from '@vue/test-utils';
import CustomMessage from '@/components/CustomMessage.vue';
import { ElAlert } from 'element-plus';

describe('CustomMessage', () => {
  it('renders the correct props', () => {
    const message = 'Custom message';
    const type = 'success';
    const title = 'Custom title';
    const closable = true;
    const showIcon = false;

    const wrapper = mount(CustomMessage, {
      props: {
        message,
        type,
        title,
        closable,
        showIcon,
      },
      global: {
        components: {
          'el-alert': ElAlert,
        },
      },
    });

    const alertComponent = wrapper.findComponent(ElAlert);

    expect(alertComponent.props('title')).toBe(title);
    expect(alertComponent.props('type')).toBe(type);
    expect(alertComponent.props('closable')).toBe(closable);
    expect(alertComponent.props('showIcon')).toBe(showIcon);
  });

  it('sets the correct default props', () => {
    const message = 'Custom message';
    const wrapper = mount(CustomMessage, {
      props: {
        message,
      },
      global: {
        components: {
          'el-alert': ElAlert,
        },
      },
    });

    const alertComponent = wrapper.findComponent(ElAlert);

    expect(alertComponent.props('type')).toBe('info');
    expect(alertComponent.props('title')).toBe('');
    expect(alertComponent.props('closable')).toBe(false);
    expect(alertComponent.props('showIcon')).toBe(true);
  });
});