import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new NotificationContent('Nova notificação'),
      category: 'New',
    });

    expect(notification).toBeTruthy();
  });
});
