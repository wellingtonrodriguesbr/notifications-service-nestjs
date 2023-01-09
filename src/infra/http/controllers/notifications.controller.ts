import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotifications: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
    const { notification } = await this.sendNotifications.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
