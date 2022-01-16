import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Organizations, OrganizationsModel } from '../entities/organizations';
import { OrganizationsInput } from './types/organization-input';


@Resolver(Organizations)
export class OrganizationsResolver {
  @Query((_returns) => Organizations, { nullable: false })
  async returnSingleCategory(@Arg('id') id: string) {
    if (!id) throw new Error("You must provide an Id");
    return await OrganizationsModel.findById({ _id: id });
  }

  @Query(() => [Organizations])
  async returnAllCategories() {
    return await OrganizationsModel.find();
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