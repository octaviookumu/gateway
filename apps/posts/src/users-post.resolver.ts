import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';

// To lookup the user on a given post
@Resolver(() => User)
export class UsersPostResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postsService.forAuthor(user.id);
  }
}
