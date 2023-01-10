import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countrecipientsNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-different' }),
    );

    const { count } = await countrecipientsNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
