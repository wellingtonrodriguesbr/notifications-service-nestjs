import { Notification, NotificationProps } from '@app/entities/notification';
import { NotificationContent } from '@app/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'New',
    content: new NotificationContent('Nova notificação'),
    recipientId: 'example-recipient-id',
    ...override,
  });
}
