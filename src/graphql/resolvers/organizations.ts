import { Resolver, Arg, Query } from 'type-graphql';
import { Organizations } from '../entities/organizations';
// import { OrganizationsInput } from './types/organization-input';
import { getMongoManager } from "typeorm";
@Resolver(Organizations)
export class OrganizationsResolver {
  @Query((_returns) => Organizations, { nullable: false })
  async returnSingleOrganization(@Arg('id') id: number) {
    if (!id) throw new Error("You must provide an Id");
    const manager = getMongoManager();
    const org = await manager.findOne(Organizations, { id });
    return org;
  }

  @Query(() => [Organizations])
  async returnAllOrganizations() {
    const manager = getMongoManager();
    const org = await manager.find(Organizations);
    return org;
  }


  // @Mutation(() => Categories)
  // async createCategory(
  //   @Arg('data') { name, description }: CategoriesInput
  // ): Promise<Categories> {
  //   const category = (
  //     await CategoriesModel.create({
  //       name,
  //       description,
  //     })
  //   ).save();
  //   return category;
  // }

  // @Mutation(() => Boolean)
  // async deleteCategory(@Arg('id') id: string) {
  //   await CategoriesModel.deleteOne({ id });
  //   return true;
  // }

}